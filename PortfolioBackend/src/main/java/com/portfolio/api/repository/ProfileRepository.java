package com.portfolio.api.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.portfolio.api.entity.*;
public interface ProfileRepository extends JpaRepository<Profile , Long> {

}
