import { Helmet } from "react-helmet-async";

type SeoHeadProps = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  image?: string;
  type?: "website" | "article";
};

const SITE_URL = "https://xyphx.com";
const DEFAULT_IMAGE_PATH = "/logo.jpg";

export default function SeoHead({
  title,
  description,
  canonicalPath,
  robots = "index, follow",
  image = DEFAULT_IMAGE_PATH,
  type = "website",
}: SeoHeadProps) {
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content="XyphX" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="XyphX" />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@xyphx" />
    </Helmet>
  );
}