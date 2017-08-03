$( document ).ready(function(){
	//Material Design initializations
	$(".button-collapse").sideNav();
	$('.scrollspy').scrollSpy();
    $('ul.tabs').tabs('select_tab', 'tab_id');

	var options = [
			{selector: '.class', offset: 200, callback: 'globalFunction()' },
			{selector: '.other-class', offset: 200, callback: 'globalFunction()' },
		];
	Materialize.scrollFire(options);

	//Scrollfire
	var options = [
		{selector: '#projects', offset: 0, callback: function(el) {
			Materialize.toast("This is our ScrollFire Demo!", 1500 )
		} }
	];
	Materialize.scrollFire(options);

	/*
		Do showStaggeredList Scroll file for skills list
	*/

	//Switch active toggle on nav-bar link
	$('.nav-link').on('click', function(event) {
		//clear all active
		$('.nav-link').removeClass('active');
		//then add active for clicked
		$(this).addClass('active');
	});

});
