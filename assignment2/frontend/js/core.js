var app = angular.module('customerApp', ['customerController', 'customerService']);

app.directive('formAutofillFix', function() {
	return function(scope, elem, attrs) {
		elem.prop('method', 'POST');

		if(attrs.ngSubmit) {
			setTimeout(function() {
				elem.unbind('submit').submit(function(e) {
					e.preventDefault();
					elem.find('input, textarea, select').trigger('input').trigger('change').trigger('keydown');
					scope.$apply(attrs.ngSubmit);
				});
			}, 0);
		}
	};
});