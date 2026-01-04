export interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: "As a video business that sells itself on great design, we needed a website that looked good and could handle a huge amount of image and video content. Spokes Digital worked tirelessly to deliver a website we are really proud to share with our clients. The new site looks fantastic and works smoothly, which I'm sure has contributed to the uplift in online referrals we've seen since it launched.",
    author: 'Octavia Norrish',
    company: 'Octavia Jewellery.',
  },
  {
    id: '2',
    quote: 'Working with Glenn Wilmore was an absolute pleasure. The attention to detail and understanding of our brand needs exceeded all expectations. The website perfectly captures our vision.',
    author: 'Sarah Johnson',
    company: 'Creative Studio',
  },
  {
    id: '3',
    quote: 'Glenn delivered a stunning website that not only looks incredible but performs exceptionally well. The entire process was smooth and professional from start to finish.',
    author: 'Michael Chen',
    company: 'Tech Solutions',
  },
]

