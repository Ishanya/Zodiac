package com.playlist.playlist.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.playlist.playlist.model.Playlist;


@Repository
public interface PlayListDao extends JpaRepository<Playlist,Integer> {
 
	
	public List<Playlist> findAllByUserId(String userId);

	 @Transactional
	 @Modifying
	 @Query(value = "delete from playlist where play_list_id = ?", 
	   nativeQuery = true)
	public int deleteByPlayListId(int playListId);
}
