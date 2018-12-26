package com.ntl.movieapp.login.movies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ntl.movieapp.login.movies.model.ProfileBean;
import com.ntl.movieapp.login.movies.service.ProfileService;

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
public class ProfileController {
	
	@Autowired
	ProfileService profileService;

	public ProfileController() {
		super();
	}
	
	public ProfileController(ProfileService profileService) {
		this.profileService=profileService;
	}
	
	
	@PostMapping("/register")
	public ProfileBean register(@RequestBody ProfileBean profileBean) {
		return profileService.register(profileBean);
	}
	
	

}
