import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  url: string
}

export default function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="mb-4 overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 group-hover:shadow-lg">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-gray-900">{title}</h3>
      <p className="text-lg text-gray-700 mb-3 font-medium transition-colors duration-300 group-hover:text-gray-800">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl text-gray-800 underline-wavy hover:text-gray-600 transition-all duration-300 inline-block font-semibold group-hover:translate-x-1"
      >
        Visit Website
      </a>
    </div>
  )
}

