<?php

namespace Tests\Unit;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        $response = $this->call('GET', '/');
		$this->assertResponseOk();
		//$this->assertEquals('coucou', $response->getContent());
    }
}
