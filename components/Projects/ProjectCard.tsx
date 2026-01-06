import Image from 'next/image'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  url: string
}

export default function ProjectCard({ title, description, image, url }: ProjectCardProps) {
  return (
    <div className="group text-center border-b border-gray-800 pt-[3.5em] pb-[12em] px-[2em] project-card-1024 project-card-1200 project-card-800 project-card-1440">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block mb-4 overflow-hidden rounded-lg bg-white project-image-shadow transition-all duration-300 group-hover:shadow-xl cursor-pointer"
      >
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/11' }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 33.33vw"
          />
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-5" />
        </div>
      </a>
      <h3 className="text-4xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-gray-900 pt-[1em] project-title-responsive">{title}</h3>
      <p className="text-[9px] text-gray-900 mb-3 transition-colors duration-300 group-hover:text-gray-800">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[14px] text-black underline-straight hover:text-gray-600 transition-all duration-300 inline-block font-bold group-hover:translate-x-1"
      >
        Visit Website
      </a>
    </div>
  )
}

