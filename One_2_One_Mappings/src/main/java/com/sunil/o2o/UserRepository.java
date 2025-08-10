package com.sunil.o2o;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

	@Repository
	public interface UserRepository extends JpaRepository<user, Long>{

	}

