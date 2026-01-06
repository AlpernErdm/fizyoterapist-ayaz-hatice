import React from 'react';
import Link from 'next/link';
import Container from './Container';

interface PageHeaderProps {
  title: string;
  breadcrumbs?: {
    label: string;
    href: string;
  }[];
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, breadcrumbs }) => {
  return (
    <section className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white pt-header">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <Container size="lg" className="relative z-10 py-16 md:py-20">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
          {title.toUpperCase()}
        </h1>

        {/* Breadcrumb Navigation */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center gap-3 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-gray-400">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="bg-gray-900 text-white px-4 py-2 rounded font-medium">
                    {crumb.label.toUpperCase()}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="bg-white text-gray-900 px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
                  >
                    {crumb.label.toUpperCase()}
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default PageHeader;
