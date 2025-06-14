import FilterSection from "./_components/fillter-section/FilterSection";
import Footer from "./_components/Footer";
import HeroSection from "./_components/hero-section/HeroSection";
import ChooseByModel from "./_components/list-section/ChooseByModel";
import RelationedProducts from "./_components/RelationedProducts";
import qs from "qs";

async function getMacBooks() {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  const path = "/api/mac-books";

  const url = new URL(path, baseUrl);

  url.search = qs.stringify({
    fields: ["model", "screen_size", "year", "processor", "ram_memory", "storage"],
    populate: {
      image: {
        fields: ["alternativeText", "url"],
      },
      relationed_products: {
        fields: ["title", "affiliate_url"],
        populate: {
          image: {
            fields: ["alternativeText", "url"],
          },
        },
      },
      macbook_conditions: {
        fields: ["condition", "price_min", "price_max", "search_key", "affiliate_url"],
      },
      comment: {
        fields: ["content"],
      },
    },
  });

  const res = await fetch(url, {
    next: {
      //revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch MacBooks");
  }

  const macBooks = await res.json();
  console.log("MacBooks iniciais", macBooks);

  return macBooks;
}

export default async function Home() {
  const macBooks = await getMacBooks();

  return (
    <>
      <HeroSection />
      <FilterSection macBooks={macBooks} />
      <RelationedProducts />
      <ChooseByModel macBooks={macBooks} />
      <Footer />
    </>
  );
}
