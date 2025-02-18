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
    quote: "<span class='highlight'>Working with Rando is like using a mac:</span> it just works the way that you would have expected even if you weren't aware of the expectation.",
    author: "Patrick Bagwell",
    role: "Vice President of Solutions at ConnectivRX",
    avatar: "/images/avatars/patrickbagwell.png",
    linkedin: "https://linkedin.com/in/patrick-bagwell"
  },
  {
    quote: "Randy is <span class='circle'>great with clients</span>, delivers designs that are admired, can be relied upon in stressful situations to bring calm, and is great in a sales pitch!",
    author: "Suzy Bates",
    role: "Senior Program Manager for Marketing Strategy at Cloudflare, Inc.",
    avatar: "/images/avatars/suzybates.jpg",
    linkedin: "https://linkedin.com/in/suzy-bates"
  },
  {
    quote: "When you work with Randy one thing you'll notice is that <span class='highlight'>he is always on top of his game.</span> He is an excellent communicator and has a respected voice in the industry.",
    author: "Scott Bell",
    role: "Director of Technology at STAUFFER",
    avatar: "/images/avatars/scottbell.jpg",
    linkedin: "https://linkedin.com/in/scott-bell"
  },
  {
    quote: "Collaborating with Randy on major website design projects <span class='circle'>is always</span> an excellent experience. His designs are effective, not just beautiful.",
    author: "Grace Stoeckle",
    role: "Staff UX Researcher at Fanatics, Inc.",
    avatar: "/images/avatars/gracestoeckle.jpg",
    linkedin: "https://linkedin.com/in/grace-stoeckle"
  },
  {
    quote: "Randy does a great job at both allowing me the autonomy I needed to run my project, but also stepped in to offer support and helpful feedback when needed. Randy is always positive, helpful, and professional. I would be thrilled to work with him again.",
    author: "Nica Lorber",
    role: "Strategy and Design Consultant",
    avatar: "/images/avatars/nicalorber.jpg",
    linkedin: "https://www.linkedin.com/in/nicalorber"
  },
  {
    quote: "Randy [as a leader] makes space for people to thrive on their own. Whenever I ever felt stuck, I could count on Randy to guide me to an answer.",
    author: "Ashley Hitson",
    role: " Lead UI/UX Designer | Accessibility Advocate",
    avatar: "/images/avatars/ashleyhitson.jpg",
    linkedin: "https://www.linkedin.com/in/nicalorber"
  }
];

export function Testimonial({ quote, author, role, avatar, linkedin }: TestimonialProps) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-white rounded-lg">
      <p className="text-xl [&>mark]:bg-orange-200 [&>mark]:absolute [&>mark]:-z-10 [&>mark]:w-[0%] [&>mark]:transition-all [&>mark]:rounded-md [&>mark]:px-1 [&>mark]:py-0.5 hover:[&>mark]:w-[100%]" dangerouslySetInnerHTML={{ __html: quote }} />
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={avatar} alt={author} />
          <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="font-medium text-balance hover:text-blue-600">
            {author}
          </a>
          <p className="text-sm text-ash-700 text-balance">{role}</p>
        </div>
      </div>
    </div>
  );
} 