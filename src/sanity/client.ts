import { createClient } from 'next-sanity'

const mySanityProjectId = process.env.SANITY_PROJECT_ID

if (!mySanityProjectId) {
    throw new Error('Missing SANITY_PROJECT_ID in environment variables.')
}

export const sanityClient = createClient({
    projectId: mySanityProjectId,
    dataset: 'production',
    apiVersion: '2024-11-01',
    useCdn: false
})
