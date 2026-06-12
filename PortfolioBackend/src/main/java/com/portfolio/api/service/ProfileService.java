package com.portfolio.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

import com.portfolio.api.entity.Profile;
import com.portfolio.api.repository.ProfileRepository;

@Service
public class ProfileService {
	@Autowired
	private ProfileRepository profileRepository;

	public List<Profile> getAllProfiles() {
		return profileRepository.findAll();
	}

}
