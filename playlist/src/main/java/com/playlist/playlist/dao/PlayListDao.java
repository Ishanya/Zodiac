package com.playlist.playlist.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.playlist.playlist.model.Playlist;


@Repository
public interface PlayListDao extends JpaRepository<Playlist,Integer> {
 
	public List<Playlist> findAllByUserId(String userId);

	public int deleteByPlayListId(int playListId);
}
