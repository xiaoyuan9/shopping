const path = require('path')

module.exports = {
    // ����Ӧ�ð�ʱ�Ļ��� URL,�÷��� webpack ����� output.publicPath һ��
    publicPath: './',
    // ����ļ�Ŀ¼
    outputDir: 'dist',
    // eslint-loader �Ƿ��ڱ����ʱ����
    lintOnSave: true,
    // �Ƿ�ʹ�ð�������ʱ�������� Vue �����汾
    runtimeCompiler: false,
    // ���������Ƿ����� sourceMap �ļ�
    productionSourceMap: false,
    // ���ɵ� HTML �е� <link rel="stylesheet"> �� <script> ��ǩ������ Subresource Integrity (SRI)
    integrity: false,
    // webpack�������
    chainWebpack: (config) => {
        config.resolve.alias
            .set('vue$', 'vue/dist/vue.esm.js')
            .set('@', path.resolve(__dirname, './src'))
            .set('components', path.resolve(__dirname, './src/components'))
            .set('views', path.resolve(__dirname, './src/views'))
            .set('assets', path.resolve(__dirname, './src/assets'))
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // ��������
            config.mode = 'production'
        } else {
            // ��������
            config.mode = 'development'
        }
    },
    // css�������
    css: {
        // �Ƿ����css�����ExtractTextPlugin��
        extract: true,
        // �Ƿ��� CSS source maps
        sourceMap: false,
        // cssԤ����������
        loaderOptions: {},
        // �Ƿ����� CSS modules for all css / pre-processor files.
        modules: false
    },
    // �Ƿ�ʹ�� thread-loader
    parallel: require('os').cpus().length > 1,
    // PWA ����������
    pwa: {},
    // webpack-dev-server �������
    devServer: {
        open: true,
        host: 'localhost',
        // host: '192.168.3.254',
        port: 8080,
        https: false,
        hotOnly: false,
        // http ��������
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:3000/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        before: (app) => {}
    },
    // �������������
    pluginOptions: {

    }
}