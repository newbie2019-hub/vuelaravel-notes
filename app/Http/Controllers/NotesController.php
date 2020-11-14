<?php

namespace App\Http\Controllers;

use App\Models\notes;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NotesController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt');
    }

    public function store(Request $request) {
        $this->validate($request, [
            'title' => 'required',
            'note' => 'required',
            'id' => 'required',
        ]);
        notes::create([
            'title' => $request->title,
            'content' => $request->note,
            'user_id' => $request->id
        ]);

        return response()->json([
            'msg'=>'Note created successfuly'
        ], 200);
    }
    
    public function get(Request $request){
        $user = Auth::user();
        return notes::where(['user_id' => $user->id, 'archived' => 0])->paginate($request->total);
    }

    public function getArchived(Request $request){
        $user = Auth::user();
        return notes::where(['user_id' => $user->id, 'archived' => 1])->paginate($request->total);
    }

    public function addArchived(Request $request){
        return notes::where('id', $request->id)->update(['archived' => 1]);
    }

    public function unarchive(Request $request){
        return notes::where('id', $request->id)->update(['archived' => 0]);
    }

    public function delete(Request $request){
        notes::where('id', $request->id)->delete();
        return response()->json([
            'msg' => 'Note deleted successfully!'
        ]);
    }

    public function put(Request $request){
        $data = [
            'title' => $request->title,
            'content' => $request->note,
        ];

        return notes::where('id', $request->noteid)->update($data);
    }


}
