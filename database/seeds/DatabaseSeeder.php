<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

use App\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        Model::unguard();

         $users = array(
            ['name' => 'Phil', 'email' => 'phil@gmail.com', 'password' => Hash::make('secret')],

        );
            
        // Loop through each user above and create the record for them in the database
        foreach ($users as $user)
        {
            User::insert($user);
        }
    }
}
