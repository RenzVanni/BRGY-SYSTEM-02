import { LOGIN } from '@/constants/navigation';
import { error } from 'console';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('query');
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_DEV_URL + query, {
    headers: {
      Cookie: req.headers.get('cookie')
    },
    credentials: 'include'
  });

  if (response.status == 401) {
    (await cookies()).delete('access_token');
    const unAuthorized = NextResponse.json({}, { status: response.status });
    return unAuthorized;
  }

  if (response.status == 204) {
    console.log('Status inside server: ', response.status);
    const noContent = new NextResponse(null, {
      status: response.status
    });
    return noContent;
  }

  if (response.status == 200) {
    const data = await response.json().catch(() => {});
    const nextResponse = NextResponse.json(data, {
      status: response.status,
      headers: response.headers
    });

    return nextResponse;
  }
}

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('query');
  const body = await req.json();
  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_DEV_URL + query, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(body)
  });

  if (response.status == 401) {
    (await cookies()).delete('access_token');
    const unAuthorized = NextResponse.json({}, { status: response.status });
    return unAuthorized;
  }

  if (response.status == 204) {
    console.log('Status inside server: ', response.status);
    const noContent = new NextResponse(null, {
      status: response.status
    });
    return noContent;
  }

  if (response.status == 200) {
    const data = await response.json().catch(() => {});
    const nextResponse = NextResponse.json(data, {
      status: response.status,
      headers: response.headers
    });

    return nextResponse;
  }
}

export async function PATCH(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('query');
  const contentType = req.headers.get('content-type');
  let response: Response = null;

  if (contentType?.includes('multipart/form-data')) {
    const body = await req.formData();
    const backend = await fetch(process.env.NEXT_PUBLIC_BACKEND_DEV_URL + query, {
      method: 'PATCH',
      headers: {
        Cookie: req.headers.get('cookie')
      },
      credentials: 'include',
      body: body
    });
    response = backend;
  } else if (contentType?.includes('application/json')) {
    const body = await req.json();
    const backend = await fetch(process.env.NEXT_PUBLIC_BACKEND_DEV_URL + query, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Cookie: req.headers.get('cookie')
      },
      credentials: 'include',
      body: JSON.stringify(body)
    });
    response = backend;
  } else {
    return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
  }

  if (response.status == 401) {
    (await cookies()).delete('access_token');
    const unAuthorized = NextResponse.json({}, { status: response.status });
    return unAuthorized;
  }

  if (response.status == 204) {
    console.log('Status inside server: ', response.status);
    const noContent = new NextResponse(null, {
      status: response.status
    });
    return noContent;
  }

  if (response.status == 200) {
    const data = await response.json().catch(() => {});
    const nextResponse = NextResponse.json(data, {
      status: response.status,
      headers: response.headers
    });

    return nextResponse;
  }
  return NextResponse.json({ error: 'No data' }, { status: 400 });
}

export async function PUT(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get('query');
  const contentType = req.headers.get('content-type');
  let response: Response = null;

  if (contentType?.includes('multipart/form-data')) {
    const body = await req.formData();
    console.log('Form of account: ', body);
    const backend = await fetch(process.env.NEXT_PUBLIC_BACKEND_DEV_URL + query, {
      method: 'PUT',
      headers: {
        Cookie: req.headers.get('cookie')
      },
      credentials: 'include',
      body: body
    });
    response = backend;
  } else if (contentType?.includes('application/json')) {
    const body = await req.json();
    const backend = await fetch(process.env.NEXT_PUBLIC_BACKEND_DEV_URL + query, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Cookie: req.headers.get('cookie')
      },
      credentials: 'include',
      body: JSON.stringify(body)
    });
    response = backend;
  } else {
    return NextResponse.json({ error: 'Unsupported content type' }, { status: 415 });
  }

  if (response.status == 401) {
    (await cookies()).delete('access_token');
    const unAuthorized = NextResponse.json({}, { status: response.status });
    return unAuthorized;
  }

  if (response.status == 204) {
    console.log('Status inside server: ', response.status);
    const noContent = new NextResponse(null, {
      status: response.status
    });
    return noContent;
  }

  const data = await response.json().catch(() => {});
  const nextResponse = NextResponse.json(data, {
    status: response.status,
    headers: response.headers
  });

  return nextResponse;
  // return NextResponse.json({ error: 'No data' }, { status: 400 });
}
