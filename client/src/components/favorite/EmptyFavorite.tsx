import Image from 'next/image'

export default function EmptyFavorite() {
  return (
    <div className="mt-4">
    <section className="flex flex-col gap-4 md:flex-row items-center justify-center">
      {/* image wrapper */}
      <div className="">
        <Image
          src="/wishlist-empty.svg"
          width={300}
          height={167}
          alt="favorite-empty"
        />
      </div>
      {/* content */}
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold">Your favorite is empty</h3>
        <p className="font-semibold text-md">
          Save activites to your favorites by clicking on the heart icon.
        </p>
        {/* TODO: replace with another btn  */}
        <button className="mt-4">Find things to do</button>
      </div>
    </section>

    <div className=" flex flex-col gap-4 text-center items-center">
      <span className="py-8">
        <svg
          width="37"
          height="3"
          fill="none"
          viewBox="0 0 37 3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="37" height="3" fill="#FFD938"></rect>
        </svg>
      </span>

      <p className="font-semibold">
        Sync your wishlist across devices:{" "}
        <span className="font-bold cursor-pointer text-blue-500">
          Log in
        </span>{" "}
        /{" "}
        <span className="font-bold cursor-pointer text-blue-500">
          {" "}
          Sign up{" "}
        </span>
      </p>

      <span className="py-8">
        <svg
          fill="none"
          width="35"
          height="10"
          viewBox="0 0 35 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.83833 0L12.2482 5.45455L17.658 0L23.0678 5.45455L28.4777 0L34.775 6.34939L33 8.10987L28.4777 3.55017L23.0678 9.00472L17.658 3.55017L12.2482 9.00472L6.83833 3.55017L1.77503 8.65533L0 6.89485L6.83833 0Z"
            clipRule="evenodd"
            fill="#FF5533"
            fillRule="evenodd"
          ></path>
        </svg>
      </span>
    </div>
  </div>
  )
}
