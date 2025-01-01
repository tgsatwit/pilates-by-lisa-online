import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY
    const LIST_ID = 'fd2333b966'
    const DATACENTER = API_KEY?.split('-')[1]

    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )

    const responseData = await response.json()

    if (!response.ok) {
      // Handle existing subscribers gracefully
      if (responseData.title === 'Member Exists') {
        return NextResponse.json(
          { error: 'You are already subscribed to our newsletter!' },
          { status: 400 }
        )
      }
      throw new Error(responseData.detail || 'Failed to subscribe to the newsletter')
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe to the newsletter' },
      { status: 500 }
    )
  }
} 