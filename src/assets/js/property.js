/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Menu
4. Init Intro Slider
5. Init Price Slider
6. Init Google Map


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var header = $('.header');
	var menu = $('.menu');
	var menuActive = false;
	var ctrl = new ScrollMagic.Controller();
	var map;

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();

		setTimeout(function()
		{
			$(window).trigger('resize.px.parallax');
		}, 375);
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initIntroSlider();
	

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 127)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if($('.hamburger').length && $('.menu').length)
		{
			var hamb = $('.hamburger');
			var close = $('.menu_close_container');

			hamb.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

			close.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
				else
				{
					closeMenu();
				}
			});

	
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	4. Init Intro Slider

	*/

	function initIntroSlider()
	{
		if($('.intro_slider').length)
		{
			var introSlider = $('.intro_slider');
			introSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:false,
				smartSpeed:1200,
				dots:false,
				nav:false
			});

			if($('.intro_slider_prev').length)
			{
				var prev = $('.intro_slider_prev');
				prev.on('click', function()
				{
					introSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.intro_slider_next').length)
			{
				var next = $('.intro_slider_next');
				next.on('click', function()
				{
					introSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	5. Init Price Slider

	*/

    

    /* 

	6. Init Google Map

	*/

	
});