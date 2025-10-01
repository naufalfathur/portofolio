
import { NextResponse } from 'next/server';
import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const token = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !token) {
    throw new Error('Missing CONTENTFUL env vars');
}

const client = createClient({ space, accessToken: token });

export async function GET(request: Request) {
    try {
        const res = await client.getEntries({ content_type: 'docFiles' });
        const items = res.items ?? [];

        const payload = items.map(item => ({
            id: item.sys.id,
            ...item.fields
        }));

        return NextResponse.json(payload, {
            status: 200,
            headers: {
                'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
            }
        });
    } catch (err) {
        console.error('Contentful API error', err);
        return NextResponse.json({ error: 'failed' }, { status: 500 });
    }
}