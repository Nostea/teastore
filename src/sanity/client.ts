import { createClient } from 'next-sanity'
import dotenv from 'dotenv'

dotenv.config()

const mySanityProjectId = process.env.SANITY_PROJECT_ID

export const sanityClient = createClient({
    projectId: mySanityProjectId,
    dataset: 'production',
    apiVersion: '2024-11-01',
    useCdn: false
})
