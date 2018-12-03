package com.playlist.playlist.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class PlaylistItems {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int playListItemId;
	private int movieId;
	private int playListId;
	
	public PlaylistItems() {
		super();
	}

	/**
	 * @param playListItemId
	 * @param movieId
	 * @param playListId
	 */
	public PlaylistItems(int playListItemId, int movieId, int playListId) {
		super();
		this.playListItemId = playListItemId;
		this.movieId = movieId;
		this.playListId = playListId;
	}

	/**
	 * @return the playListItemId
	 */
	public int getPlayListItemId() {
		return playListItemId;
	}

	/**
	 * @param playListItemId the playListItemId to set
	 */
	public void setPlayListItemId(int playListItemId) {
		this.playListItemId = playListItemId;
	}

	/**
	 * @return the movieId
	 */
	public int getMovieId() {
		return movieId;
	}

	/**
	 * @param movieId the movieId to set
	 */
	public void setMovieId(int movieId) {
		this.movieId = movieId;
	}

	/**
	 * @return the userId
	 */
	public int getPlayListId() {
		return playListId;
	}

	/**
	 * @param userId the userId to set
	 */
	public void setPlayListId(int playListId) {
		this.playListId = playListId;
	}
	
}
