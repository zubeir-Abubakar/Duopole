import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AssetImage from '../components/AssetImage'

export default function NotFound() {
  return (
    <section className="relative isolate min-h-[60vh] flex items-center justify-center overflow-hidden bg-botanical pt-20">
      <AssetImage src="/images/avocado-fields.png" alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-10" />
      <SEO title="Page Not Found" description="The page you requested could not be found. Return to the Duopole Fresh Imports home page." />
      <div className="text-center px-4">
        <div className="text-8xl font-black text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-charcoal mb-4">Page Not Found</h1>
        <p className="text-charcoal/60 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-block bg-primary text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-primary-dark transition-colors">
          Back to Home
        </Link>
      </div>
    </section>
  )
}

