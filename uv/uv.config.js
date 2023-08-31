self.__uv$config = {
    prefix: '/uv/service/',
    bare: [
        'https://ilovebears.eduiscooltbh.eu.org/',
        'https://uv.holyubofficial.net/',
        'https://coolbare.lightspeedsucks.workers.dev/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
