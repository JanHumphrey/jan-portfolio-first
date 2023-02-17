import Link from "next/link";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
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
      <div>
        {/* LINE HERE */}
        <div></div>
        <div>
          <div>
            <p>Jan Humphrey</p>
          </div>
          <div>
            <ul>
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
      </div>
    </>
  )
}
export default Footer