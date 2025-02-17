import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type TestimonialProps = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  linkedin: string;
};

// Testimonial data
export const testimonials: TestimonialProps[] = [
  {
    quote: "Working with Rando is like using a mac: it just works the way that you would have expected even if you weren't aware of the expectation.",
    author: "Patrick Bagwell",
    role: "Vice President of Solutions at ConnectivRX",
    avatar: "/images/avatars/patrickbagwell.png",
    linkedin: "https://linkedin.com/in/patrick-bagwell"
  },
  {
    quote: "He is great with clients, has delivered designs that are admired, can be relied upon in stressful situations to bring calm, and is great in a sales pitch!",
    author: "Suzy Bates",
    role: "Senior Program Manager for Marketing Strategy at Cloudflare, Inc.",
    avatar: "/images/avatars/suzybates.jpg",
    linkedin: "https://linkedin.com/in/suzy-bates"
  },
  {
    quote: "When you work with Randy one thing you'll notice is that he is always on top of his game. In addition to his precision and attention to detail, he is an excellent communicator and has a respected voice in the industry.",
    author: "Scott Bell",
    role: "Director of Technology at STAUFFER",
    avatar: "/images/avatars/scottbell.jpg",
    linkedin: "https://linkedin.com/in/scott-bell"
  },
  {
    quote: "Collaborating with Randy on some major website design projects was always an excellent experience. He is constantly self-educating and came into projects with solutions for every problem. He also has a natural feel for user experience, so his designs are effective, not just beautiful.",
    author: "Grace Stoeckle",
    role: "Staff UX Researcher at Fanatics, Inc.",
    avatar: "/images/avatars/gracestoeckle.jpg",
    linkedin: "https://linkedin.com/in/grace-stoeckle"
  }
];

export function Testimonial({ quote, author, role, avatar, linkedin }: TestimonialProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg">
      <p className="text-xl">{quote}</p>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-blue-400">
            {author}
          </a>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
    </div>
  );
} 