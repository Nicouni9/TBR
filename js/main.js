$(document)
    .ready(function () {
		/*topbar > modal login*/
		$('.modalLogin').click(iframeLogin);
		function iframeLogin() {	
			var options = {
				url: 'modal_login.html',
				size: 'sm'
			};
            return eModal
            .iframe(options);
        }		
		/*modal shaka*/
		$('.modalShaka').click(iframeShaka);
		function iframeShaka() {	
			var options = {
				url: 'modal_shaka.html',
				size: 'sm'
			};
            return eModal
            .iframe(options);
        }
		/*modal buddy*/
		$('.modalBuddy').click(iframeBuddy);
		function iframeBuddy() {	
			var options = {
				url: 'modal_buddy.html',
				size: 'sm'
			};
            return eModal
            .iframe(options);
        }
		/*modal comment*/
		$('.modalComment').click(iframeComment);
		function iframeComment() {	
			var options = {
				url: 'modal_comment.html',
				size: 'sm'
			};
            return eModal
            .iframe(options);
        }
		/*modal follower*/
		$('.modalFollower').click(iframeFollower);
		function iframeFollower() {	
			var options = {
				url: 'modal_follower.html',
				size: 'sm'
			};
            return eModal
            .iframe(options);
        }
		/*copyright > modal privacy*/
		$('.modalPrivacy').click(iframePrivacy);
		function iframePrivacy() {	
			var options = {
				url: 'modal_privacy.html',
				size: 'lg'
			};
            return eModal
            .iframe(options);
        }
		/*modal view photo*/
		$('.modalViewPhoto').click(iframeViewPhoto);
		function iframeViewPhoto() {	
			var options = {
				url: 'modal_view_photo.html',
				size: 'lg'
			};
            return eModal
            .iframe(options);
        }
		/*modal view video*/
		$('.modalViewVideo').click(iframeViewVideo);
		function iframeViewVideo() {	
			var options = {
				url: 'modal_view_video.html',
				size: 'lg'
			};
            return eModal
            .iframe(options);
        }
		/*modal view gallery*/
		$('.modalViewGallery').click(iframeViewGallery);
		function iframeViewGallery() {	
			var options = {
				url: 'modal_view_gallery.html',
				size: 'lg'
			};
            return eModal
            .iframe(options);
        }
		/*modal view personal photo*/
		$('.modalViewPersonalPhoto').click(iframeViewPersonalPhoto);
		function iframeViewPersonalPhoto() {	
			var options = {
				url: 'modal_view_personal_photo.html',
				size: 'lg'
			};
            return eModal
            .iframe(options);
        }	
		/*modal edit photo*/
		$('.modalEditPhoto').click(iframeEditPhoto);
		function iframeEditPhoto() {	
			var options = {
				url: 'modal_edit_photo.html',
				size: 'lg'
			};
            return eModal
            .iframe(options);
        }
		/*copyright > modal cookie*/
		$('.modalCookie').click(iframeCookie);
		function iframeCookie() {	
			var options = {
				url: 'modal_cookie.html',
				size: 'lg'
			};
            return eModal
            .iframe(options);
        }
		/*copyright > modal terms*/
		$('.modalTerms').click(iframeTerms);
		function iframeTerms() {	
			var options = {
				url: 'modal_terms.html',
				size: 'lg'
			};
            return eModal
            .iframe(options);
        }
		/*topbar > modal confirm logout*/
		$('.modalConfirmLogout').click(confirmLogout);
		function confirmLogout() {	
			var options = {
				message: 'Confirm logout?',
				size: 'sm'
			};
            return eModal
            .confirm(options);
        }
		/*modal confirm delete*/
		$('.modalConfirmDelete').click(confirmDelete);
		function confirmDelete() {	
			var options = {
				message: 'Confirm delete?',
				size: 'sm'
			};
            return eModal
            .confirm(options);
        }
		/*custom scroll bar*/
		$('#miniFeed').enscroll({
			verticalTrackClass: 'track',
			verticalHandleClass: 'handle',
			minScrollbarLength: 28
		});
		/*filter checkbox*/
		$('.search input[type=checkbox]').attr('checked',false);
		$(".chk").on('change',function(){
		var self=$(this);
			var aData= self.attr("value");
			$("."+aData).toggleClass('hide')
		});
		// tooltip
		$('[data-toggle="tooltip"]').tooltip();

		
    });
/*custom select*/
$(function() {
	$('.tbrSelect').select2();
});
/**/
$('#myFile').click(function() {
    $('#myInputFile').click();
});
