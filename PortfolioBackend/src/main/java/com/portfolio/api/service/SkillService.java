package com.portfolio.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.portfolio.api.entity.Skill;
import com.portfolio.api.repository.SkillRepository;

@Service
public class SkillService {
	@Autowired
	private SkillRepository skillRepository;
	public List<Skill> getAllSkills(){
		return skillRepository.findAll();
	}

}
