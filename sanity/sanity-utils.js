import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getScopes() {
  return createClient(clientConfig).fetch(groq`*[_type == "scope"]{
    industry,
    heading,
    paragraph,
    buttonText,
    slug
  }`);
}

export async function getScope(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "scope" && slug.current == $slug][0]{
      industry,
      heading,
      paragraph,
      buttonText,
      slug
    }`,
    { slug }
  );
}
export async function getPage(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "scopepage" && slug.current == $slug][0]{
      title,
      industry,
      "slug": slug.current,
      "content": content[]->{
        title,
        "content": content[]->{
          _id,
          heading,
          paragraph,
          buttonText,
          "slug": slug.current,
        }
      }
    }`,
    { slug }
  );
}

export async function getContent(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "categoryPage" && slug.current == $slug][0]{
      title,
      "content": content[]->{
        ...
      }
    }`,
    { slug }
  );
}

export async function getBlogs() {
  return createClient(clientConfig).fetch(groq`*[_type == "blogBlock"]{
    heading,
    paragraph,
    "poster": poster.asset->url,
    "slug": slug.current,
    _createdAt,
    _updatedAt,
    highlighted
  }`);
}

export async function getExploreBlogs() {
  return createClient(clientConfig).fetch(groq`*[_type == "blogBlock"][0..2]{
    heading,
    paragraph,
    "poster": poster.asset->url,
    "slug": slug.current,
    _createdAt,
    _updatedAt,
    highlighted
  }`);
}

export async function getBlog(slug) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogBlock" && slug.current == $slug][0]{
      heading,
      ctaHeading,
      ctaParagraph,
      ctaButtonText,
      _createdAt,
      _updatedAt,
      "poster": poster.asset->url,
      "content": content[]{
        ...,
        _type == "image" => {
          "imageUrl": asset->url,
          ...
        }
      }
    }`,
    { slug }
  );
}

export async function getFaq() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "faq"]{
      question, answer
    }`
  );
}
