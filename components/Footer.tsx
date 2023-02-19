import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";

const SocialLink = ({ icon, url }: { icon: React.ReactNode; url: string }) => {
  return (
    <Link href={url} className="px-2 pb-2" target='_blank'>
      {icon}
    </Link>
  );
};


function Footer() {
  return (
    <>
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20 lg:py-2">
        {/* LINE HERE */}
        <div className="h-0.5 w-full bg-white dark:bg-gray-500"></div>

        <div className="flex flex-row justify-between mt-2 mb-8 ">
          <p className="font-main text-md">Jan Humphrey</p>

          <ul className="flex  flex-row content-evenly">
            <SocialLink
              icon={
                <AiFillInstagram
                  size={35}

                />
              }
              url="https://www.instagram.com/jnhmphry/"
            />
            <SocialLink
              icon={
                <AiFillGithub
                  size={35}

                />
              }
              url="https://github.com/JanHumphrey"
            />
            <SocialLink
              icon={
                <AiFillFacebook
                  size={35}

                />
              }
              url="https://www.facebook.com/JnHmphry/"
            />
            <SocialLink
              icon={
                <AiFillLinkedin
                  size={35}

                />
              }
              url="https://www.linkedin.com/in/janhumphrey/"
            />

          </ul>
        </div>
      </div>

    </>
  )
}
export default Footer