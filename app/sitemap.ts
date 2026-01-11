import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity.client'
import { groq } from 'next-sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://frunze.ru'

  // Fetch all posts slugs
  const posts = await client.fetch<Array<{ slug: string; publishedAt: string }>>(
    groq`*[_type=="post" && defined(slug.current)]{ "slug": slug.current, publishedAt }`
  )

  // Fetch all cases slugs
  const cases = await client.fetch<Array<{ slug: string; publishedAt: string }>>(
    groq`*[_type=="case" && defined(slug.current)]{ "slug": slug.current, publishedAt }`
  )

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const caseUrls = cases.map((c) => ({
    url: `${baseUrl}/cases/${c.slug}`,
    lastModified: c.publishedAt ? new Date(c.publishedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...postUrls,
    ...caseUrls,
  ]
}
