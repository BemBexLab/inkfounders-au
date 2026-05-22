import type { Metadata } from "next";
import React from 'react'
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/audiobook-services");

const page = () => {
  return (
    <div>page</div>
  )
}

export default page
