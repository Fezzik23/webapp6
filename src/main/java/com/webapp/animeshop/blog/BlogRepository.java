package com.webapp.animeshop.blog;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {

	Blog findById(long id);
	Blog findByName(String name);
	List<Blog> findAll();
	@Transactional
	@Modifying
	@Query(value="DELETE FROM blogentries WHERE product_id =:id",nativeQuery = true)
	void deleteBlog(@Param("id")long productId);
}