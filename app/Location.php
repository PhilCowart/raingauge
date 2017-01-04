<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
	public $timestamps = false;

	protected $fillable = [
		'title',
		'zip',
	]


    protected $dates = [
    	'deleted_at'
	];

}
