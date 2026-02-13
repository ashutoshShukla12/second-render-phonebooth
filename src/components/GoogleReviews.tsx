import { Star } from 'lucide-react';

interface Review {
  reviewerName: string;
  reviewerID: string;
  review: {
    text: string;
    media?: string;
  };
  rating: number; // Added rating for visual completeness, though not explicitly asked for but is standard for Google Reviews
  date: string; // Added date for visual completeness
}

const dummyReviews: Review[] = [
  {
    reviewerName: "Alice Johnson",
    reviewerID: "user_001",
    review: {
      text: "Absolutely fantastic service! The technician was prompt, professional, and fixed my phone screen in under 30 minutes. Highly recommend!",
    },
    rating: 5,
    date: "2 weeks ago"
  },
  {
    reviewerName: "Mark Smith",
    reviewerID: "user_002",
    review: {
      text: "Great experience overall. Reasonable prices and they were very transparent about the process. Will definitely come back for any future repairs.",
    },
    rating: 4,
    date: "1 month ago"
  },
  {
    reviewerName: "Sarah Davis",
    reviewerID: "user_003",
    review: {
      text: "I thought my laptop was a goner, but they managed to save it! Excellent data recovery service. I am so relieved.",
    },
    rating: 5,
    date: "3 days ago"
  },
  {
    reviewerName: "Kevin Wilson",
    reviewerID: "user_004",
    review: {
      text: "Fast and reliable. They fixed the charging port on my tablet. It works perfectly now. Good job guys!",
    },
    rating: 5,
    date: "1 week ago"
  },
   {
    reviewerName: "Emily Chen",
    reviewerID: "user_005",
    review: {
      text: "Super friendly staff and very knowledgeable. They explained exactly what was wrong and how they would fix it.",
    },
    rating: 5,
    date: "2 days ago"
  }
];

export default function GoogleReviews() {
  return (
    <section className="py-20 bg-[#0b0c10] overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          What Our Clients Say
        </h2>
        <div className="w-20 h-1 bg-[#66fcf1] mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-scroll flex gap-6 px-4 w-max hover:[animation-play-state:paused]">
          {/* Original set of reviews */}
          {dummyReviews.map((review, index) => (
            <ReviewCard key={`original-${index}`} review={review} />
          ))}
          {/* Duplicate set for seamless looping */}
           {dummyReviews.map((review, index) => (
            <ReviewCard key={`duplicate-${index}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[400px] md:w-[500px] shrink-0 bg-[#1f2833] p-8 rounded-2xl border border-white/5 shadow-lg group hover:scale-[1.02] hover:border-[#66fcf1]/30 hover:shadow-[0_8px_30px_rgb(102,252,241,0.15)] transition-all duration-300 ease-out cursor-default">
      <div className="flex items-center gap-5 mb-6">
        <div className="w-12 h-12 rounded-full bg-linear-to-tr from-[#66fcf1] to-[#45a29e] flex items-center justify-center text-[#0b0c10] font-bold text-xl shrink-0">
          {review.reviewerName.charAt(0)}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg group-hover:text-[#66fcf1] transition-colors">{review.reviewerName}</h3>
          <p className="text-sm text-[#c5c6c7]">{review.date}</p>
        </div>
        <div className="ml-auto flex">
            {/* Google G icon roughly approximated or just generic star for now if no icon lib available, 
                assuming lucide-react is available based on previous context or standard setups. 
                If not, I'll stick to text or simple shapes. */}
                <span className="text-yellow-400 font-bold flex text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={20} fill={i < review.rating ? "#facc15" : "none"} className={i < review.rating ? "text-yellow-400" : "text-gray-600"} />
                    ))}
                </span>
        </div>
      </div>
      <p className="text-[#c5c6c7] text-base leading-relaxed line-clamp-4">
        {review.review.text}
      </p>
    </div>
  );
}
