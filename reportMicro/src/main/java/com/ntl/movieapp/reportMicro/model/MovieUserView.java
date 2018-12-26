package com.ntl.movieapp.reportMicro.model;

public class MovieUserView {

	private int movieId;
	private String userId;
	
	
	public MovieUserView() {
		super();
	}
	
	public MovieUserView(int movieId, String userId) {
		super();
		this.movieId = movieId;
		this.userId = userId;
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
	public String getUserId() {
		return userId;
	}
	/**
	 * @param userId the userId to set
	 */
	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	
}
