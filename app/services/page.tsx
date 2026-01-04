export const metadata = {
  title: 'Services',
  description: 'Web design and development services',
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen px-2 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-16 text-gray-800">
          Explore my Services.
        </h1>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Brochure Website</h2>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Are you looking for an online 4-6 page website?
            </h3>
            <div className="space-y-5 text-gray-800">
              <p className="plain-text">
                I can assist, if you are in need of a small brochure website, to promote/showcase your business online this is the service for you. The package includes a 100% bespoke website integrated with Content Management System WordPress, fully responsive.
              </p>
              <p className="plain-text">
                Typically this type of project takes 3-4 weeks, however this is an estimate and can take longer depending on design iterations or scope creep.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ecommerce Website</h2>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Are you looking for an online shop?
            </h3>
            <div className="space-y-5 text-gray-800">
              <p className="plain-text">
                I can assist, if you are in need of an online shop, to showcase products and allow online purchases this is the service for you. The package includes a custom-built, fully responsive website integrated with WordPress and WooCommerce for e-commerce.
              </p>
              <p className="plain-text">
                Typically this type of project takes 4-8 weeks, however this is an estimate and can take longer depending on design iterations or scope creep.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Web Maintenance</h2>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Have a site but need some help?
            </h3>
            <p className="plain-text text-gray-800">
              I can assist with tweaks or additions to your existing website, whether it&apos;s integrated with WordPress or is static. The goal is to ensure your website stays current and up to date. Work is charged on an hourly or daily rate depending on requirements.
            </p>
          </section>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Interested in starting a project?
          </h2>
          <p className="plain-text text-gray-800 mb-6">
            If you have a project or a potential collaboration you&apos;d like to discuss, email me or call to discuss your requirements and next steps.
          </p>
          <a
            href="/contact"
            className="text-xl text-gray-800 underline-straight hover:text-gray-600 transition-colors font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

