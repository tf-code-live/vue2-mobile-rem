module.exports = {
    chainWebpack: config => {
        // 开启eslint自动修复，关键代码
		config.module
			.rule('eslint')
			.use('eslint-loader')
			.tap(options => {
				options.fix = true
				return options
			})
		// config.module
		// 	.rule('scss')
		// 	.oneOf('vue')
		// 	.use('px2rem-loader')
		// 	.loader('px2rem-loader')
		// 	.before('postcss-loader') // this makes it work.
		// 	.options({ remUnit: 10, remPrecision: 8 })
		// 	.end()
	}
}