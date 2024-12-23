/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'content.jdmagicbox.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.felixhospital.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.myhealthhospitals.com', pathname: '/**' },
      { protocol: 'https', hostname: 'images.pexels.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.collidu.com', pathname: '/**' },
      { protocol: 'https', hostname: 'fastercapital.com', pathname: '/**' },
      { protocol: 'https', hostname: 'drbest.in', pathname: '/**' },
      { protocol: 'https', hostname: 'i0.wp.com', pathname: '/**' },
      { protocol: 'https', hostname: 'cdnblogdiscover.leverageedu.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.golfandhealth.org', pathname: '/**' },
      { protocol: 'https', hostname: 'www.connectedly.org', pathname: '/**' },
      { protocol: 'https', hostname: 'mycareersview.com', pathname: '/**' },
      { protocol: 'https', hostname: 'c8.alamy.com', pathname: '/**' },
      { protocol: 'https', hostname: 'encrypted-tbn2.gstatic.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.sakraworldhospital.com', pathname: '/**' },
      { protocol: 'https', hostname: 'play-lh.googleusercontent.com', pathname: '/**' },
      { protocol: 'https', hostname: 'draravindan.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.ajhospital.in', pathname: '/**' },
      { protocol: 'https', hostname: 'www.csrmandate.org', pathname: '/**' },
      { protocol: 'https', hostname: 'www.shutterstock.com', pathname: '/**' },
      { protocol: 'https', hostname: 'www.medicoverhospitals.in', pathname: '/**' },
      { protocol: 'https', hostname: 'www.venkateshwarhospitals.com', pathname: '/**' },
      { protocol: 'https', hostname: 'beyondtype1.org', pathname: '/**' },
      { protocol: 'https', hostname: 'assets.thehansindia.com', pathname: '/**' },
    ], // Add all allowed domains here
  },
};

export default nextConfig;
