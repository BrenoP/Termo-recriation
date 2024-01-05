/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  compiler: {
    styledComponents: true
  }
}

module.exports = {
  webpack: (config, { isServer }) => {
    // Adicione a regra para lidar com arquivos de áudio
    config.module.rules.push({
      test: /\.(wav|mp3|ogg)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/assets/', // Altere conforme necessário
            outputPath: 'static/assets/', // Altere conforme necessário
          },
        },
      ],
    });

    // Retorna a configuração modificada
    return config;
  },
};

