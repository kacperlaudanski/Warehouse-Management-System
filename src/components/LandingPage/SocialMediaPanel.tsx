import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import SocialMediaIcon from "./SocialMediaIcon";

export default function SocialMediaPanel() {
  return (
    <ul className="w-2/4 flex justify-between items-center text-neutral-500">
      <SocialMediaIcon icon={<Instagram />}/>
      <SocialMediaIcon icon={<Linkedin/>}/>
      <SocialMediaIcon icon={<Twitter />}/>
      <SocialMediaIcon icon={<Youtube />}/>
    </ul>
  );
}
