package com.portfolio.api.controller;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.portfolio.api.entity.Profile;
import com.portfolio.api.service.ProfileService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")
public class ProfileController {
	@Autowired
	private ProfileService profileService;

	@GetMapping
	public List<Profile> getprofileDetails() {
		return profileService.getAllProfiles();
	}

}
