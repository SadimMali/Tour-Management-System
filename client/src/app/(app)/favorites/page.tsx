import EmptyFavorite from "@/components/favorite/EmptyFavorite";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function FavoritesPage() {
  return (
    <main>
      <MaxWidthWrapper>
        <section className="border-b-1">
          <button className="font-bold py-5 px-4 border-b-4 border-red-400">
            Upcoming
          </button>
        </section>

        {/* empty favorites */}
        <EmptyFavorite />
      </MaxWidthWrapper>
    </main>
  );
}
