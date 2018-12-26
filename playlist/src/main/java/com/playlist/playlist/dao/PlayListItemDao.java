package com.playlist.playlist.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.playlist.playlist.model.PlaylistItems;

@Repository
public interface PlayListItemDao extends JpaRepository<PlaylistItems,Integer> {

public List<PlaylistItems> findAllByPlayListId(int playListId);
	
	 @Transactional
	 @Modifying
	 @Query(value = "delete from playlist_items where play_list_item_id = ?", 
	   nativeQuery = true)
	public int deleteByPlayListItemId(int playListItemId);

}
