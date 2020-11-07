function line_scroll(){	
	$(window).scroll(function() {
		let percent = (((window.scrollY)/(window.document.body.scrollHeight - window.innerHeight))*100);
		document.getElementById('line_scroll_indicator').style.width = percent+'%';
		console.log(document.getElementById('line_scroll_indicator').style.width);
	});
}