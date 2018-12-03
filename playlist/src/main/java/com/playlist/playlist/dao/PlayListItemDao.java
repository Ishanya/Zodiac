package com.playlist.playlist.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.playlist.playlist.model.PlaylistItems;

@Repository
public interface PlayListItemDao extends JpaRepository<PlaylistItems,Integer> {

	public List<PlaylistItems> findAllByPlayListId(int playListId);
	
	public int deleteByPlayListItemId(int playListItemId);

}
