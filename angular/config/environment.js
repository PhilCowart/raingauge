rainGauge.config(function(envServiceProvider){

		envServiceProvider.config({
			domains: {
				development: ['localhost'],
				production: ['hipaa.com']
			},
			vars: {
				development: {
					api: 'http://localhost/api',
					name: 'LOCAL',
				},
				production: {
					api: '',
					name: 'Production',
				}
			}
		});

		envServiceProvider.check();

	});
